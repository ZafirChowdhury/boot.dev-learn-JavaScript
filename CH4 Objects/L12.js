function getProviderCount(provider, counts) {
    if (counts[provider]) {
        return counts[provider]
    }
    
    return 0;
}
